import Document, { Html, Head, Main, NextScript } from "next/document"
export default class LocalizedDocument extends Document {
  render() {
    return <Html lang="uk"><Head /><body><Main /><NextScript /></body></Html>
  }
}
