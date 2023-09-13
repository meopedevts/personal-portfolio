'use server'

import {
  NotionSetupResponse,
  NotionStackResponse,
} from '@/types/notion-setup-types'
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const getSetup = async () => {
  const databaseId = 'dd2ccf76d3a14271aa7b2d5d54694233'
  const response = await notion.databases.query({
    database_id: databaseId,
  })

  const typedResponse = response as unknown as NotionSetupResponse

  return typedResponse.results.map((setup) => {
    return {
      title: setup.properties.title.title[0].plain_text,
      group: setup.properties.group.rich_text[0].plain_text,
      image: setup.properties.image.url,
      buy: setup.properties.buy.url,
    }
  })
}

const getStack = async () => {
  const databaseId = '3c33367f04d140e0a7f6ace50dfa38f5'
  const response = await notion.databases.query({
    database_id: databaseId,
  })

  const typedResponse = response as unknown as NotionStackResponse

  return typedResponse.results.map((stack) => {
    return {
      title: stack.properties.title.title[0].plain_text,
      group: stack.properties.group.rich_text[0].plain_text,
      image: stack.properties.image.url,
      site: stack.properties.site.url,
    }
  })
}

export { getSetup, getStack }
