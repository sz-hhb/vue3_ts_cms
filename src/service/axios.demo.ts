import axios from "axios";

axios
  .get("http://httpbin.org/get", {
    params: {
      name: "coderwhy",
      age: 18,
    },
  })
  .then((res) => {
    console.log(res.data);
  });

axios
  .post("http://httpbin.org/post", {
    data: {
      name: "why",
      age: 18,
    },
  })
  .then((res) => {
    console.log(res);
  });
