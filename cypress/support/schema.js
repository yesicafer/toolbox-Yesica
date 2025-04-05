
export const schemav1 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "url": {
        "type": "string"
      },
      "raw_url": {
        "type": "string"
      },
      "method": {
        "type": "string"
      },
      "headers": {
        "type": "object",
        "properties": {
          "accept": {
            "type": "string"
          }
        },
        "required": [
          "accept"
        ]
      },
      "queries": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string"
          }
        },
        "required": [
          "text"
        ]
      }
    },
    "required": [
      "url",
      "raw_url",
      "method",
      "headers",
      "queries"
    ]
  }