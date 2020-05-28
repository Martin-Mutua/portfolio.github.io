import React from 'react';
import WorkItem from './WhatIDo-item';

function Work() {
    return(
        <div>
            <article id="work" class="wrapper style2">
				<div class="container">
					<header>
						<h2>Here's what I do.</h2>
						<p>Technology is making work easier.</p>
					</header>
					<div class="row aln-center">
						<WorkItem />
					</div>
					<footer>
						<p>Projects I have worked on</p>
						<a href="#portfolio" class="button large scrolly">See some of my recent works</a>
					</footer>
				</div>
			</article>
        </div>
    );
}

export default Work;