//Differentiate between the slider buttons
const carousel = document.querySelector('.carousel')

const previousBtn = carousel.querySelector('.previous-button')
const nextBtn = carousel.querySelector('.next-button')

        //Click the next button 
        const contents = carousel.querySelector('.carousel__contents')

        nextBtn.addEventListener('click', event => {
            //get current slide that is selected
            const currentSlide = contents.querySelector('.is-selected')
            //get the next slide that is selected
            const nextSlide = currentSlide.nextElementSibling
            const destination = getComputedStyle(nextSlide).left
            console.log(destination)

            //set the carousel's content left property to slide images
            contents.style.left = '-' + destination

            //remove the is-selected class and add it to the next image/slide
            currentSlide.classList.remove('is-selected')
            nextSlide.classList.add('is-selected')

        })

        //Clicking the previous button
        previousBtn.addEventListener('click', event => {
            const currentSlide = contents.querySelector('.is-selected')
            const previousSlide = currentSlide.previousElementSibling
            const destination = getComputedStyle(previousSlide).left
            //change the displayed slide 
            contents.style.left = '-' + destination
            //update the location of the is-selected class
            currentSlide.classList.remove('is-selected')
            previousSlide.classList.add('is-selected')
        })

        //Show the previous button on second & third slides for better UX
        nextBtn.addEventListener('click', event => {
            previousBtn.removeAttribute('hidden')
        })

        //Hide the next button on the last side 
        nextBtn.addEventListener('click', event => {
            const currentSlide = contents.querySelector('.is-selected')
            const nextSlide = currentSlide.nextElementSibling

            if (!nextSlide.nextElementSibling) {
                nextBtn.setAttribute('hidden', true)
            }
        })

        // Hide the buttons again after clicking the slides to the ends
        previousBtn.addEventListener('click', event => {
            nextBtn.removeAttribute('hidden')

            const currentSlide = contents.querySelector('.is-selected')
            const previousSlide = currentSlide.previousElementSibling

            if (!previousSlide) {
                previousBtn.setAttribute('hidden', true)
            }
        })

//Add functionality to the slider dots
const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))

            //Know when a dot gets clicked by looping through each dot 
            dots.forEach((dot) => {
                dot.addEventListener('click', event => {
                    let clickedDotIndex

                    for (let index = 0; index < dots.length; index++) {
                        if (dots[index] == dot) {
                            clickedDotIndex = index
                        }
                    }
            //Use the clickedDotIndex to find the equivalent slide to show the
            const slideToShow = slides[clickedDotIndex]
            //Get the slideToShow's left position 
            const destination = getComputedStyle(slideToShow).left
            contents.style.left = '-' + destination

            //Keep our slider buttons working
            slides.forEach(slide => {
                slide.classList.remove('is-selected')
            })
            
            slideToShow.classList.add('is-selected')


                })
            })

            

            


