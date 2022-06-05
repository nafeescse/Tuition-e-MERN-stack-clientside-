import React from 'react';

const TutorModal = () => {

    const imageKey = '56990745d68884951459c386a73adc77';

    const formSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const gender = event.target.gender.value;
        const img = event.target.image.value;
        console.log(name, phone, email, gender, img);

        // const image = data.image[0];
        const formData = new FormData();

        formData.append('image', img);
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => console.log(result))
        }
    return (
            <div>
                <input type="checkbox" id="tutor-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="tutor-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg text-center">REGISTER AS A TUTOR, IT'S FREE!!!</h3>




                        <form onSubmit={formSubmit} class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input name='phone' type="text" placeholder="Enter your phone" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                <span class="label-text">Select Gender</span>
                            </label>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Male</span>
                                    <input value='male' type="radio" name="gender" class="radio checked:bg-blue-500" checked />

                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Female</span>
                                    <input value="female" type="radio" name="gender" class="radio checked:bg-pink-500" />
                                </label>
                            </div>
                            <input type="file" name="image" id="" />
                            <div className="modal-action justify-center">

                                <input type="submit" name='submit' value="SUBMIT" className='btn btn-error '></input>
                            </div>


                        </form>





                    </div>
                </div>
            </div>
        );
    };

    export default TutorModal;