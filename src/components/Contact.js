import React from 'react';
import Footer from './Footer.js';
import Social from './Social.js';
import Form from './Form'

function Contact() {
    return (
        <div>
            <article id="contact" class="wrapper style4">
				<div class="container medium">
					<header>
						<h2>Have me solve your problems.</h2>
						<p>or for any inquiry, question or just want to say hi.</p>
					</header>
					<div class="row">
						<div class="col-12">
							<Form />
						</div>
						<div class="col-12">
							<Social />
						</div>
					</div>
					<Footer />
				</div>
			</article>
        </div>
    )
}

export default Contact
