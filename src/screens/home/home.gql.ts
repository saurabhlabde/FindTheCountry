import { gql } from "@apollo/client";

const COUNTRIES_GQL = gql`
  query {
    countries {
      code
      continent {
        code
        name
      }
      currency
      emoji
      languages {
        code
        name
      }
      name
      phone
      states {
        code
        name
      }
    }
  }
`;

export { COUNTRIES_GQL };
