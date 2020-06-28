import { metadataFromParams } from "@socialgouv/kosko-charts/components/app/metadata";
import env from "@kosko/env";
import { SealedSecret } from "@kubernetes-models/sealed-secrets/bitnami.com/v1alpha1/SealedSecret";

const params = env.component("app");

const secret = new SealedSecret({
  metadata: {
    ...metadataFromParams(params),
    name: `app-env-${process.env.CI_COMMIT_SHORT_SHA}`,
    annotations: {
      "sealedsecrets.bitnami.com/cluster-wide": "true",
    },
  },
  spec: {
    encryptedData: {
      SMTP_EMAIL_PASSWORD:
        "AgCxMpBOCaSzg1tWkIMIGNVLKjcvXO2XlliOiz5fT73kynG6NklT1melNRyhRvZeY1Ht2fH1AJAuHLxO8DRSWwXL4DcW0SM7Ly5rVyeTlTTmuP86RIP8MXAo0LlNBMQEzqnlE95sHsp1e1C0LxpjU4TaUvzGS9YVVBDBZVuq++uywcxtZDIr7FP1GBxSR/CEn6wv6xVlm1TVi0JqX0qwMNE0LMuWHW4Kn87fMpoRegMKHTHMetHzS+S1SKdKNNikYFKX2A8vrSE1iytRM+2X4OHNeOn9ZMT/0f8zl0NwOmPs2VodJxTBFZufbobw6r8l8MDSc3KymCNNqZN2311TesQRuojoprU6+NfPWWCoGvow2aKXDPZBqtnWCBCx40Z7Q5OYVmZKemkm1u03CUkew47ngpTU5ybg0JZQPgivmZ0OdD3enfhS09hfkxAISAs60hoCJSxglJ9ho0U3mNAOld5zWj+TByq2TJEp5oL1fg86UYsg1BHVNimAk68Oe31rOCrzAfYNzLZv/++Mws2mWVC8bB91sKCsaCpOVysRqbhkJ82nt0L3JG1lpO3jqN5JzvjHXvBaDaimyPZt0a3rDnCnABve9MGHzS/rxMeSDG2McX7LPATqS4JPOBpHfmYDI6ftsPl4T/krzILuGJLWVCAnI/78pErEzBUgJFIs94ysUG2D0DfZPESwYnfkchdT06ztCHP3NS8BxeWMTUKM",
      SMTP_EMAIL_USER:
        "AgDJtETLDZOMDOPm5BMgwExkPK1o7UIYTnx4lnJPvx+t6vw85qejusk0HH+eSXwVPfFjXO9+PxQ4dxWM5+AUFSeARmv/WIzmRpq5vxz5L3qe9+VlVfo3v3Uv4eQsiMrBAtzDsj52/tEYR4Tw+aSO33riq/eX8qWhzgfn9zKrUDwFj+M4BtpNDEjtjDACSE1KCq1a70hbO9ddBu66zfF9Y/Hif2Bt4QXuqaYzEreVWf3RDJknrdpmph0wLMLEhWJdNtImLSTGMu0YJ6Sh+dqSy283qqdQ4xY6egnfXSq7F7I28jBtWToAxMpDzFbFNgj22iEM1tpJFp4Z8Cmv1AZ1k1m6QF5bNoZY5vTBdmdOurF6/I0C5Q3IPas92KyIOIEtpunQOTblY9VwfBDeQS1cePVAic2DQkoVkMj8ENycckazqwgTuxXgii0u5Qk7oXmVjQSHl/3OCrSmv/cPCxvdfwoWIOgQE1Yks+pZiIqZagpN6CNeM7fOkC6x9AeCpjmo4cy5RKu0jTPxupYNhq2ZefvLnvw22wHRpL9Nvp/t1lM7SscXGwBpO46qi76rvW7X4kUuB7Wb1RrxkwPsrn4uWYy1/7GDjJgV2XUgQYaIVQ5Bz6W5uv0wsGILRaza0iAjYzxin9JsVxky7mHjDiUFLEWdkExTjCNAZWzGaDFMuBntqNbxcqwSggDcUa3VHPBt28rq3jNiM2C/PJ4=",
      SMTP_URL:
        "AgBK/Pc4L9ODWsZnBpeHi7BWYJth6BAr9L0V+HAdqlUO+/aYUAlh0IN2ITVLu+PUXY7pIWCVBXoWbuSSXeoeQQFV/dK1mLqT5AFwg0u//gUUcGGVaImZCzWLQsI0k6mZY7Z6E/jSkcQnPJdAHEVf5yKlaR2HwEfuMxHWb8BWhr8NUxmDu1rcAdmMkP3d7U6fnn9Sy7fX9jH/GCg20ecAcBxAMwmmGeK4z7CuD1a+ddIAYPogg3w6vdG1zRSxtx327eRzATClW37ktadYcSAImfnbAFk72X4bY/dswXYOr/NljXxSZ6rPD1zmVZ+QXLWJDoBV5RHB6AZ7RJBIgpXd9hpG19JNy7KQVn7oZsHr6cZgJ1hu2dU+OxdviDPWQb4nbeRGLOkr9mp9WOtZUb+fLb/BWwj5Aw4uRcuOg3xPeem1qS4eWY5e6RS8FV7YLxefEWoAhQpNLuEmQX8dzXVaPvS2Bos9CcBZTS2S1lYGGqZNg1A4tlpZ71hiTir7upmR5hMFQ8DRAH2THUD6Y6EYZj9zIusBHo+YgL3j1V1Hn1GRHh16Wot/cb903XsF0LpwkbHLJ3hqbGAn0clsUOlqE0Gs0RBcskb5JFAcoYk9YzA4kImbKT6yQl2ZRt+c7BJ0wM9TBClUortMh+wlMaeU15gsn3MbuM5Vgng6nNCo29oZQ2l6yERg3aC9m7ctEChKYs4R0/mDInBZmiBWdksenkt7",
    },
  },
});

export default [secret];