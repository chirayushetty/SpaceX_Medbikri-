import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Loading } from "../components"
import { format } from "date-fns"

export default function SingleLaunch() {
  const [singleLaunch, setSingleLaunch] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchSingleLaunch = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
      const data = await res.json()
      setSingleLaunch(data)
    }

    fetchSingleLaunch()
  }, [id])

  return (
    <>
      {!singleLaunch ? (
        <Loading />
      ) : (
        <section className="py-32 max-width grid grid-cols-1 gap-10 md:grid-cols-2">
          <article>
            {singleLaunch.links.patch.large ? (
              <img
                src={singleLaunch.links.patch.large}
                alt={singleLaunch.name}
              />
            ) : (
              <img
                src="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
                alt=""
              />
            )}
          </article>

          <article>
            <h1 className="heading">{singleLaunch.name}</h1>
            <h2 className="text-white font-bold text-xl opacity-75 mt-2">
              Launch Date:{" "}
              {format(new Date(singleLaunch.date_local), "dd MMMM yyyy")},{" "}
              {singleLaunch.success ? (
                <span className="text-emerald-500">Successful</span>
              ) : (
                <span className="text-rose-500">Failed</span>
              )}
            </h2>

            <p className="text-white opacity-75 my-10">
              {singleLaunch.details}
            </p>

            <ul className="text-white text-sm opacity-75 mb-8">
              <li className="mb-3">
                Fairings:{" "}
                {singleLaunch.fairings
                  ? `${singleLaunch.fairings.reused ? "Reused" : "Not Reused"}`
                  : "No Fairings Used"}
              </li>

              <li>
                <Link
                  to="/launches"
                  className="text-white opacity-75 text-sm hover:opacity-100"
                >
                  &larr; Back
                </Link>
              </li>
              
            </ul>
        
          </article>
        </section>
      )}
    </>
  )
}