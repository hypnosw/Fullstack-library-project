import { ReturnBook } from "./ReturnedBook";

export const Carousel = ()=>{
    return (
        <div className='container mt-5' style={{ height: 550 }}>
            <div className='homepage-carousel-title'>
                <h3>Find Your Next "I Stayed Up Too Late Reading" Book.</h3>
            </div>

            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 d-none d-lg-block' 
            data-bs-interval='false'>
                
                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <ReturnBook/>
                            <ReturnBook/>
                            <ReturnBook/>
                        </div>
                    </div>

                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <ReturnBook/>
                            <ReturnBook/>
                            <ReturnBook/>
                        </div>
                    </div>

                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <ReturnBook/>
                            <ReturnBook/>
                            <ReturnBook/>
                        </div>
                    </div>
                    </div>
                    <button className='carousel-control-prev' type='button' 
                            data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                            <span className='visually-hidden'>Previous</span>
                    </button>

                    <button className='carousel-control-next' type='button' 
                            data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                            <span className='visually-hidden'>Next</span>
                    </button>
                </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <img 
                        src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
                        width='151'
                        height='233'
                        alt="Book"
                        />
                        <h6 className='mt-2'>
                            <b>Book</b>
                        </h6>
                        <p>Luv2Code</p>
                        <a className='btn main-color text-white' href='#'>Reserve</a>
                    </div>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <a className='btn btn-outline-secondary btn-lg' href='#'>View More</a>
            </div>
        </div>
    );
}