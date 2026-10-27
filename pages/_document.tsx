import Document, { Html, Head, Main, NextScript } from "next/document"
export default class LocalizedDocument extends Document {
  render() {
    return <Html lang={this.props.__NEXT_DATA__.page.startsWith("/en") ? "en" : "uk"}><Head /><body><Main /><NextScript /></body></Html>
  }
}
