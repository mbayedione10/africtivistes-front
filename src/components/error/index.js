import * as React from "react"

const Error = () => (
  <>
    <section id="page-banner" className="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(images/page-banner.jpg)`}} data-overlay="6">
      <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>page doesn’t exist</h2>
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">error page</li>
                          </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
    <section id="error-part" className="pt-130 pb-130">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="error-content text-center">
                        <img src="images/error.png" alt="error"/>
                        <p className="mt-40">Sorry, This Page Does Not Exist</p>
                        <a href="index-2.html" className="main-btn mt-35">Back homepage</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </>
)

export default Error