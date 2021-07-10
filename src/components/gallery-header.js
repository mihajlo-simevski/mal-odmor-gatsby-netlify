import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/gallery-header.css'

const GalleryHeader = () => (
    <section className="gallery-area fix ">

        <div className="gallery-top section-bg pt-90 pb-40" dataBackground="assets/img/gallery/section_bg01.png" /* style="background-image: url('assets/img/gallery/section_bg01.png')"*/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="cl-xl-7 col-lg-8 col-md-10">

                        <div className="section-tittle text-center mb-70">
                            <span>Our Offerd Menu</span>
                            <h2>Some Trendy And Popular Courses Offerd</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="properties__button">

                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Special</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Lunch</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"> Brakefirst </a>
                                <a className="nav-item nav-link" id="nav-dinner-tab" data-toggle="tab" href="#nav-dinner" role="tab" aria-controls="nav-dinner" aria-selected="false"> Dinner </a>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid p-0">

            <div className="tab-content" id="nav-tabContent">

                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="row no-gutters">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /* style="background-image: url(assets/img/gallery/gallery1.png);" */></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /* style="background-image: url(assets/img/gallery/gallery2.png);" */></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="row no-gutters">
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /* style="background-image: url(assets/img/gallery/gallery3.png);" */></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /* style="background-image: url(assets/img/gallery/gallery4.png);" */></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="row no-gutters">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /*style="background-image: url(assets/img/gallery/gallery2.png);"*/></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /*style="background-image: url(assets/img/gallery/gallery1.png);"*/></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="row no-gutters">
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /*style="background-image: url(assets/img/gallery/gallery3.png);"*/></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /* style="background-image: url(assets/img/gallery/gallery4.png);" */></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="row no-gutters">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /* style="background-image: url(assets/img/gallery/gallery1.png);" */></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /* style="background-image: url(assets/img/gallery/gallery2.png);" */></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="row no-gutters">
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /* style="background-image: url(assets/img/gallery/gallery3.png);" */></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /* style="background-image: url(assets/img/gallery/gallery4.png);" */></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-dinner" role="tabpanel" aria-labelledby="nav-dinner">
                    <div className="row no-gutters">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /* style="background-image: url(assets/img/gallery/gallery3.png);" */></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="gallery-box">
                                <div className="single-gallery">
                                    <div className="gallery-img big-img" /* style="background-image: url(assets/img/gallery/gallery4.png);" */></div>
                                    <div className="g-caption">
                                        <span>$25</span>
                                        <h4>Delicious Food</h4>
                                        <p>Ut enim ad minim veniam quis nostr.</p>
                                        <a href="#" className="btn order-btn">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="row no-gutters">
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /* style="background-image: url(assets/img/gallery/gallery1.png);" */></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="gallery-box">
                                        <div className="single-gallery">
                                            <div className="gallery-img smoll-img" /* style="background-image: url(assets/img/gallery/gallery2.png);" */></div>
                                            <div className="g-caption">
                                                <span>$25</span>
                                                <h4>Delicious Food</h4>
                                                <p>Ut enim ad minim veniam quis nostr.</p>
                                                <a href="#" className="btn order-btn">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>


)



export default GalleryHeader
