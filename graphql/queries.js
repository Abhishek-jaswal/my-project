import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query GetStudents($course: String!) {
    students(where: { course: { _eq: $course } }) {
      id
      name
      email
      contact
      joiningDate
      courseDuration
      feesStatus
      attendance
      performance
      profilePic
    }
  }
`;
