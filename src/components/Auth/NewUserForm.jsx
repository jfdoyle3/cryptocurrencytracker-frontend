import React from 'react';
import Button from '../common/Button';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';

const NewUserForm = (props) => {
  const {query, updateForm, onSubmit} = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  }

  const handleSubmit = (e) => {
    onSubmit(e);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "800px",
        width: "100%",
      }}
    >
      <InlineInputContainer>
        <Input
          id="name"
          placeholder="Tracker name"
          onChange={handleChange}
          value={query.name}
        />
      </InlineInputContainer>
      <InlineInputContainer>
        <Input
          id="username"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
          value={query.username}
        />
      </InlineInputContainer>
      <InlineInputContainer>
        <Input
          id="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={query.password}
        />
        <Input
          id="confirm"
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
          value={query.confirm}
        />
      </InlineInputContainer>
      <Button>Submit</Button>
    </Form>
  )

}

export default NewUserForm;