import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function TaskForm({ tasks, setTasks }) {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: taskValue,
      compelted: Boolean(false),
    };

    setTasks([...tasks, task]);
    setTaskValue("");
  }

  return (
    <Formik>
      <Form onSubmit={handleSubmit} className="taskinput">
        <Field
          type="text"
          name="name"
          id="name"
          placeholder="enter task"
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default TaskForm;
