import React from 'react'

function Form() {
    return (
        <div>
            <form method="post" action="#">
                <div class="row">
                    <div class="col-6 col-12-small">
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div class="col-6 col-12-small">
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="col-12">
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div class="col-12">
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12">
                        <ul class="actions">
                            <li><input type="submit" value="Send Message" /></li>
                            <li><input type="reset" value="Clear Form" class="alt" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;
