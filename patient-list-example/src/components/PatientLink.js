import React from 'react';
import { Link } from 'react-router-dom';

export default function PatientLink(props) {
  return (
    <Link to={`/patients/${props.data.id}`}>{`${props.data.firstName} ${
      props.data.lastName
    }`}</Link>
  );
}
