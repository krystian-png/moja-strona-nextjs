import Document, { Html, Head, Main, NextScript } from "next/document"
export default class LocalizedDocument extends Document {
  render() {
    return <Html lang={this.props.__NEXT_DATA__.page.startsWith("/zh") ? "zh-Hans" : this.props.__NEXT_DATA__.page.startsWith("/en") ? "en" : this.props.__NEXT_DATA__.page.startsWith("/ru") ? "ru" : "uk"}><Head /><body><Main /><NextScript /></body></Html>
  }
}
