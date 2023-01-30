const passVerifyUtils = require('../../functions/pass.utils')
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
      verify(password: String!, rules: [RuleInput!]!): VerifyResult!
    }

    input RuleInput {
      rule: String!
      value: Int!
    }

    type VerifyResult {
      verify: Boolean!
      noMatch: [String]
    }
`);

const root = {
  verify: (args) => {
    return passVerifyUtils.verify(args.password, args.rules)
  }
}

module.exports = {
  schema,
  root
}