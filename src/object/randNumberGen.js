import { useState } from "react";

export default function generateRandomNumber() {
  const [last, setLast] = useState(-1);
  const [value, setValue] = useState(0);

//   function rand(a, b) {
//     setValue(
//       (a +
//         ((b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) /
//           2 ** 32) |
//         0,
//     );
//     if (value === last) {
//       return rand(a, b);
//     } else {
//       setLast(value);
//       return value;
//     }
//   }

    function rand(a, b) {
      return (
        (a +
          ((b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) /
            2 ** 32) |
        0
      );
    }
  return { rand };
}
