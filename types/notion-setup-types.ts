interface CreatedBy {
  object: string
  id: string
}

interface LastEditedBy {
  object: string
  id: string
}

interface Parent {
  type: string
  database_id: string
}

interface Text {
  content: string
  link: string
}

interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface RichText {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: string
}

interface Group {
  id: string
  type: string
  rich_text: RichText[]
}

interface Image {
  id: string
  type: string
  url?: string
}

interface Buy {
  id: string
  type: string
  url?: string
}

interface Text2 {
  content: string
  link: string
}

interface Title2 {
  type: string
  text: Text2
  annotations: Annotations
  plain_text: string
  href: string
}

interface Title {
  id: string
  type: string
  title: Title2[]
}

interface Properties {
  group: Group
  image: Image
  buy: Buy
  title: Title
}

interface Result {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: string
  icon: string
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
  public_url: string
}

interface NotionSetupResponse {
  object: string
  results: Result[]
  next_cursor: string
  has_more: boolean
  type: string
  // page_or_database: PageOrDatabase
}

interface GetSetupType {
  title: string
  group: string
  image: string | undefined
  buy: string | undefined
}

export type {
  CreatedBy,
  LastEditedBy,
  Parent,
  Text,
  Annotations,
  RichText,
  Group,
  Image,
  Buy,
  Text2,
  Title,
  Result,
  NotionSetupResponse,
  GetSetupType,
}
