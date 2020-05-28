import React from 'react';
import WorksItem from './Works-item';

function Works() {
    return (
        <div>
            <article id="portfolio" class="wrapper style3">
				<div class="container">
					<header>
						<h2>Here’s some stuff I made recently.</h2>
						<p>Practice makes perfect</p>
					</header>
					<div class="row">
						<WorksItem />
					</div>
					<footer>
						<p>Got a problem? Let's solve it.</p>
						<a href="#contact" class="button large scrolly">Get in touch with me</a>
					</footer>
				</div>
			</article>
        </div>
    )
}

export default Works
