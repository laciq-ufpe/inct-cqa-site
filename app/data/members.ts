import rawData from "./members.json"

export type Member = {
    name: string
    title?: string
    image?: string
    institution: string
    locality: string
    uf: string
    email: string
    alt_email?: string
    area: string
    lattes: string
    google_profile: string
    on_group: string
}

export type MemberGroup = {
    [group: string]: Member[]
}

export const membersByGroup = rawData as MemberGroup

export default membersByGroup
