interface SqrlConfiguration {
  varName: string
  autoTrim: boolean | 'nl'
  autoEscape: boolean
  [index: string]: any
}

var Conf: SqrlConfiguration = {
  varName: 'it',
  autoTrim: false,
  autoEscape: true
}

function Config (key: string, val: any): void {
  Conf[key] = val
}

// TODO: Fix types for this

export { Conf, Config }
