import { log } from "console";
import fs, { futimesSync } from "fs";
import _ from "lodash";
const pathURL = "./data.txt";
async function readTextFile(filename) {
  try {
    const data = await fs.promises.readFile(filename, "utf-8");
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

(async () => {
  const data = await readTextFile(pathURL);
  console.log(data);
})();

// async function countWords() {
//   try {
//     let textData = await readTextFile(pathURL);
//     console.log(_.words(textData).length);
//   } catch (error) {
//     console.error(error);
//   }
// }

// countWords()

// async function revers () {
//     try {
//         let textData = await readTextFile(pathURL)
//         console.log(_.reverse(_.words(textData)).join(' '));
//     } catch (error) {
//     console.error(error);

// }}

// revers()

// async function uniq() {
//     try {
//         let textData = await readTextFile(pathURL)
//         console.log(_.uniq(_.words(textData)));
//     } catch (error) {
//     console.error(error);
//     }

// }
// uniq()

// async function numUniq() {
//     try {
//         let textData = await readTextFile(pathURL)
//         console.log(_.uniq(_.words(textData)).length);
//     } catch (error) {
//     console.error(error);
//     }

// }
// numUniq()

// async function upperCase() {
//         try {
//         let textData = await readTextFile(pathURL)
//         console.log(_.upperCase(_.uniq(_.words(textData))));
//     } catch (error) {
//     console.error(error);
//     }

// }
// upperCase()

async function upperCase() {
  try {
    let textData = await readTextFile(pathURL);

  } catch (error) {
    console.error(error);
  }
}
upperCase();

