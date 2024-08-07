
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Skill.css';

const ShowData = ({ skills, onDelete }) => {
  return (
    <ul className="skill-list">
      {skills.map(skill => (
        <li key={skill.id} onClick={() => onDelete(skill.id)}>
          {skill.title}
        </li>
      ))}
    </ul>
  );
};

const Form = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit(submitHandler)}>
      <input
        className="skill-input"
        {...register("title", { required: true })}
        placeholder="Skill Title"
      />
      <button type="submit" className="add-button">+</button>
      {errors.title && <span className="error">This is required</span>}
    </form>
  );
};

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const addSkill = (data) => {
    const newSkill = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title
    };
    setSkills([...skills, newSkill]);
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const sortSkills = () => {
    setSkills([...skills].sort((a, b) => 
      isAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    ));
    setIsAscending(!isAscending);
  };

  return (
    <div className="skill-container">
      <h2>Fullstack Developer Skills</h2>
      <ShowData skills={skills} onDelete={deleteSkill} />
      <Form onSubmit={addSkill} />
      <button className="sort-button" onClick={sortSkills}>
        Sort {isAscending ? 'Descending' : 'Ascending'}
      </button>
    </div>
  );
};

export default Skill;
