import React from "react";

function BlogDetails() {
    return (
        <div className="page-content">
            {/* inner page banner */}
            <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>Blog Details</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> Home</a>
                                </li>
                                <li className="breadcrumb-item">Blog Details</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* inner page banner End*/}
            {/* Blog Large */}
            <section className="content-inner-1 bg-img-fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            {/* blog start */}
                            <div className="dz-blog blog-single style-1">
                                <div className="dz-media rounded-md">
                                    <img src="images/blog/default/blog1.jpg" alt="" />
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta  border-0 py-0 mb-2">
                                        <ul className="border-0 pt-0">
                                            <li className="post-date">
                                                <i className="far fa-calendar fa-fw m-r10" />7 March, 2022
                                            </li>
                                            <li className="post-author">
                                                <i className="far fa-user fa-fw m-r10" />
                                                By <a href="#"> Johne Doe</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="dz-title">The Time Is Running Out! Think About These 6 Ways To Change Your Library. How To Restore Library?</h4>
                                    <div className="dz-post-text">
                                        <p>
                                            Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor
                                            arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.
                                        </p>
                                        <p>
                                            Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est.
                                            Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt.
                                            Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est.
                                        </p>
                                        <blockquote className="wp-block-quote is-style-default">
                                            <p>A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading. </p>
                                            <cite>Library Community</cite>
                                        </blockquote>
                                        <p>
                                            Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor
                                            magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu,
                                            ullamcorper sed auctor vitae, porttitor quis erat.{" "}
                                        </p>
                                        <h4 className="m-b30">Understanding The Background Of Library.</h4>
                                        <img className="alignleft rounded-md w-50" src="images/blog/blog.jpg" alt="" />
                                        <p>
                                            Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna
                                            quis.
                                        </p>
                                        <p>
                                            Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas
                                            mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent
                                            taciti sociosqu ad litora
                                        </p>
                                        <p>
                                            Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat.
                                            Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis
                                            elementum.
                                        </p>
                                    </div>
                                    <div className="dz-meta meta-bottom border-top">
                                        <div className="post-tags">
                                            <strong>Tags:</strong>
                                            <a href="#">Child</a>,<a href="#">Education</a>,<a href="#">Money</a>,
                                            <a href="#">Adventure</a>
                                        </div>
                                        <div className="dz-social-icon primary-light">
                                            <ul>
                                                <li>
                                                    <a className="fab fa-facebook-f" href="#" />
                                                </li>
                                                <li>
                                                    <a className="fab fa-instagram" href="#" />
                                                </li>
                                                <li>
                                                    <a className="fab fa-twitter" href="#" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row extra-blog style-1">
                                <div className="col-lg-12">
                                    <h4 className="blog-title">RELATED BLOGS</h4>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="dz-blog style-1 bg-white m-b30">
                                        <div className="dz-media">
                                            <a href="blog-detail.html">
                                                <img src="images/blog/default/blog1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="dz-info">
                                            <h5 className="dz-title">
                                                <a href="blog-detail.html">How Library Can Increase Your Profit!</a>
                                            </h5>
                                            <p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar.</p>
                                            <div className="dz-meta meta-bottom">
                                                <ul className="">
                                                    <li className="post-date">
                                                        <i className="far fa-calendar fa-fw m-r10" />7 March, 2022
                                                    </li>
                                                    <li className="post-author">
                                                        <i className="far fa-user fa-fw m-r10" />
                                                        By <a href="#"> Johne Doe</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="dz-blog style-1 bg-white m-b30">
                                        <div className="dz-media">
                                            <a href="blog-detail.html">
                                                <img src="images/blog/large/blog4.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="dz-info">
                                            <h5 className="dz-title">
                                                <a href="blog-detail.html">Library Can Improve Your Business</a>
                                            </h5>
                                            <p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar.</p>
                                            <div className="dz-meta meta-bottom">
                                                <ul className="">
                                                    <li className="post-date">
                                                        <i className="far fa-calendar fa-fw m-r10" />7 March, 2022
                                                    </li>
                                                    <li className="post-author">
                                                        <i className="far fa-user fa-fw m-r10" />
                                                        By <a href="#"> Johne Doe</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear" id="comment-list">
                                <div className="post-comments comments-area style-1 clearfix">
                                    <h4 className="comments-title">4 COMMENTS</h4>
                                    <div id="comment">
                                        <ol className="comment-list">
                                            <li className="comment even thread-even depth-1 comment" id="comment-2">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard">
                                                        <img src="images/profile4.jpg" alt="" className="avatar" />
                                                        <cite className="fn">Michel Poe</cite> <span className="says">says:</span>
                                                        <div className="comment-meta">
                                                            <a href="#">December 28, 2022 at 6:14 am</a>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content dz-page-text">
                                                        <p>
                                                            Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam
                                                            vulputate erat.
                                                        </p>
                                                    </div>
                                                    <div className="reply">
                                                        <a rel="nofollow" className="comment-reply-link" href="#">
                                                            <i className="fa fa-reply" /> Reply
                                                        </a>
                                                    </div>
                                                </div>
                                                <ol className="children">
                                                    <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                        <div className="comment-body" id="div-comment-3">
                                                            <div className="comment-author vcard">
                                                                <img src="images/profile3.jpg" alt="" className="avatar" />
                                                                <cite className="fn">Celesto Anderson</cite> <span className="says">says:</span>
                                                                <div className="comment-meta">
                                                                    <a href="#">December 28, 2022 at 6:14 am</a>
                                                                </div>
                                                            </div>
                                                            <div className="comment-content dz-page-text">
                                                                <p>
                                                                    Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in,
                                                                    aliquam vulputate erat.
                                                                </p>
                                                            </div>
                                                            <div className="reply">
                                                                <a className="comment-reply-link" href="#">
                                                                    <i className="fa fa-reply" /> Reply
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                                <div className="comment-body" id="div-comment-4">
                                                    <div className="comment-author vcard">
                                                        <img src="images/profile2.jpg" alt="" className="avatar" />
                                                        <cite className="fn">Ryan</cite> <span className="says">says:</span>
                                                        <div className="comment-meta">
                                                            <a href="#">December 28, 2022 at 6:14 am</a>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content dz-page-text">
                                                        <p>
                                                            Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam
                                                            vulputate erat.
                                                        </p>
                                                    </div>
                                                    <div className="reply">
                                                        <a className="comment-reply-link" href="#">
                                                            <i className="fa fa-reply" /> Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="comment odd alt thread-even depth-1 comment" id="comment-5">
                                                <div className="comment-body" id="div-comment-5">
                                                    <div className="comment-author vcard">
                                                        <img src="images/profile1.jpg" alt="" className="avatar" />
                                                        <cite className="fn">Stuart</cite> <span className="says">says:</span>
                                                        <div className="comment-meta">
                                                            <a href="#">December 28, 2022 at 6:14 am</a>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content dz-page-text">
                                                        <p>
                                                            Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam
                                                            vulputate erat.
                                                        </p>
                                                    </div>
                                                    <div className="reply">
                                                        <a rel="nofollow" className="comment-reply-link" href="#">
                                                            <i className="fa fa-reply" /> Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="default-form comment-respond style-1" id="respond">
                                        <h4 className="comment-reply-title" id="reply-title">
                                            LEAVE A REPLY{" "}
                                            <small>
                                                {" "}
                                                <a rel="nofollow" id="cancel-comment-reply-link" href="javascript:void(0)" style={{ display: "none" }}>
                                                    Cancel reply
                                                </a>{" "}
                                            </small>
                                        </h4>
                                        <div className="clearfix">
                                            <form method="post" id="comments_form" className="comment-form" noValidate="">
                                                <p className="comment-form-author">
                                                    <input id="name" placeholder="Author" name="author" type="text" defaultValue="" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <input id="email" required="required" placeholder="Email" name="email" type="email" defaultValue="" />
                                                </p>
                                                <p className="comment-form-comment">
                                                    <textarea
                                                        id="comments"
                                                        placeholder="Type Comment Here"
                                                        className="form-control4"
                                                        name="comment"
                                                        cols={45}
                                                        rows={3}
                                                        required="required"
                                                        defaultValue={""}
                                                    />
                                                </p>
                                                <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                    <button id="submit" type="submit" className="submit btn btn-primary btnhover3 filled">
                                                        Submit Now <i className="fa fa-angle-right m-l10" />
                                                    </button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* blog END */}
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <aside className="side-bar sticky-top">
                                <div className="widget">
                                    <div className="search-bx">
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input name="text" className="form-control" placeholder="Search" type="text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="btn btn-primary ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-search"
                                                        >
                                                            <circle cx={11} cy={11} r={8} />
                                                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget widget_categories">
                                    <h4 className="widget-title">Category</h4>
                                    <ul>
                                        <li className="cat-item cat-item-26">
                                            <a href="blog-list-sidebar.html">Audio</a> (3)
                                        </li>
                                        <li className="cat-item cat-item-36">
                                            <a href="blog-list-sidebar.html">Beauty</a> (4)
                                        </li>
                                        <li className="cat-item cat-item-43">
                                            <a href="blog-list-sidebar.html">Fashion</a> (3)
                                        </li>
                                        <li className="cat-item cat-item-27">
                                            <a href="blog-list-sidebar.html">Images</a> (1)
                                        </li>
                                        <li className="cat-item cat-item-40">
                                            <a href="blog-list-sidebar.html">Lifestyle</a> (3)
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget recent-posts-entry">
                                    <h4 className="widget-title">Recent Posts</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-media">
                                                <a href="blog-detail.html">
                                                    <img src="images/blog/recent-blog/blog1.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="dz-info">
                                                <h6 className="title">
                                                    <a href="blog-detail.html">The Miracle Of Library In Mind.</a>
                                                </h6>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> 7 March, 2022 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-media">
                                                <a href="blog-detail.html">
                                                    <img src="images/blog/recent-blog/blog2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="dz-info">
                                                <h6 className="title">
                                                    <a href="blog-detail.html">Fall In Love With The Library</a>
                                                </h6>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> 7 March, 2022 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-media">
                                                <a href="blog-detail.html">
                                                    <img src="images/blog/recent-blog/blog3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="dz-info">
                                                <h6 className="title">
                                                    <a href="blog-detail.html">So many books, so little time.</a>
                                                </h6>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> 7 March, 2022 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-media">
                                                <a href="blog-detail.html">
                                                    <img src="images/blog/recent-blog/blog1.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="dz-info">
                                                <h6 className="title">
                                                    <a href="blog-detail.html">Omg! The Best Library Ever!</a>
                                                </h6>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> 7 March, 2022 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget widget_categories">
                                    <h4 className="widget-title">Archives</h4>
                                    <ul>
                                        <li>
                                            <a href="#">January</a>(3)
                                        </li>
                                        <li>
                                            <a href="#">Fabruary</a>(4)
                                        </li>
                                        <li>
                                            <a href="#">March</a>(4)
                                        </li>
                                        <li>
                                            <a href="#">April</a>(3)
                                        </li>
                                        <li>
                                            <a href="#">May</a>(4)
                                        </li>
                                        <li>
                                            <a href="#">Jun</a>(1)
                                        </li>
                                        <li>
                                            <a href="#">July</a>(4)
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget widget_tag_cloud">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tagcloud">
                                        <a href="#">Business</a>
                                        <a href="#">News</a>
                                        <a href="#">Brand</a>
                                        <a href="#">Website</a>
                                        <a href="#">Internal</a>
                                        <a href="#">Strategy</a>
                                        <a href="#">Brand</a>
                                        <a href="#">Mission</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            {/* Feature Box */}
        </div>
    );
}

export default BlogDetails;
