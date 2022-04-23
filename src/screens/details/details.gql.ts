import { gql } from "@apollo/client";

const COUNTRY_GQL = gql`
  query Country($code: ID!) {
    country(code: $code) {
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

export { COUNTRY_GQL };
