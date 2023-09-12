'use server'

import { NotionSetupResponse } from '@/types/notion-setup-types'
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

export { getSetup }
