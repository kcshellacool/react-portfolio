import React from 'react';


function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">Hello!</h1>
			</div>
			<div className="center">
                <img src="https://lh6.googleusercontent.com/proxy/gyZwl9kx9q_IoW6ThUftwPzwdEOHyhjJcTARRA2k9RGG73rHZbU0HvPdYTooA9aSYl4v1KeTN0WiK6mDyEdsUX0hOF_0aBWgWWvy1eEOt26Il7rmBfNZ3A=w1200-h630-p-k-no-nu" className="photo" style={{ width: "300px", height:"300px" }} alt="about-me"></img>
			</div>
			<div>
                <p>Hello! My name is Casey Hu and I'm based in Southern California. I have studied and worked as a traffic engineer for the past decade. However I always had the interest in programming and gaming. My passion is problem solving, automation and creative designs. To be honest I do a little bit of everything. To create and make something aesthetically pleasing while also working efficiently is my approach in every project that I do. I hope you enjoy my works and feel free to reach out to me for some coffee time! Peace!
                </p>
            </div>
        </section>
    );
}

export default About;