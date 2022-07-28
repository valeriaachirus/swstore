import React, {useState, useEffect} from 'react';
import "./about.css";
import {data} from "./data"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';



const Slider = () => {

const [people, setPeople] = useState(data);
const[index, setIndex] = useState(0);
console.log(data);


useEffect(()=> {
  const lastIndex = people.length - 1;
  if(index < 0) {
    setIndex(lastIndex);
  }
  if(index> lastIndex){
    setIndex(0);
  }
},[index, people]);

useEffect(() => {
  let slider = setInterval(() => {
    setIndex(index + 1)
  },5000);
  return () => {
    clearInterval(slider)
  }

},[index])

return (
  <>
 
    <section className='section'>
    <div className='title'>
      <h2>Our Team</h2>
    </div>
    <div className='section-center'>
      {people.map((item, indexPeople) => {
        const {id, image, name, title, about} = item;
        let position = "nextSlide";
        if(indexPeople === index) {
          position = "activeSlider";
        }
        if(
          indexPeople === index -1 ||
            (index === 0 && indexPeople === people.length -1)
            ) {
          position = "lastSlider"
        }
        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{about}</p>
          </article>

        );
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <AiOutlineArrowLeft/>
      </button>
      <button className='next' onClick={() => setIndex(index + 1)}>
        <AiOutlineArrowRight/>
      </button>


    </div>                             
    </section>
  </>
);
};

export default Slider;