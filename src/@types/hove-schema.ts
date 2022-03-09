interface Attribute {
  parameter: string
  description: string
  optional: string | undefined
}

interface Method {
  method: string
  description: string
  parameter: string
}

interface Event {
  event: string
  description: string
  callback: string
}

interface Slot {
  name: string
  description: string
}

export interface Hover {
  component: string
  attributes: Attribute[]
  events: Event[] | undefined
  methods: Method[] | undefined
  slots: Slot[] | undefined
  link: string
}
