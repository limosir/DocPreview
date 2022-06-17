const content1 = {
    type: 'doc',
    content: [
        {
            type: 'paragraph',
            content: [{
                type: 'text',
                text: 'Hello, Word!',
            }]
        },
        {
            type: 'table',
            content: [
                {
                    type: 'row',
                    content: [
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-1',
                                    }]
                                },
                            ]
                        },
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-2'
                                    }]
                                }
                            ]
                        }
                    ],
                },
                {
                    type: 'row',
                    content: [
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell2-1'
                                    }]
                                },
                            ],
                        },
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph', content: [{
                                        type: 'text',
                                        text: 'cell2-2'
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const content2 = {
    type: 'doc',
    content: [
        {
            type: 'paragraph',
            content: [{
                type: 'text',
                text: 'Hello, Word!',
                style: {
                    theme: 'common'
                }
            }]
        },
        {
            type: 'table',
            content: [
                {
                    type: 'row',
                    content: [
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-1',
                                        style: {
                                            theme: 'common'
                                        }
                                    }]
                                },
                            ],
                            style: {
                                theme: 'common'
                            }
                        },
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-2',
                                        style: {
                                            theme: 'common'
                                        }
                                    }],
                                    style: {
                                        theme: 'common'
                                    }
                                }
                            ],
                            style: {
                                theme: 'common'
                            }
                        }
                    ],
                    style: {
                        theme: 'common'
                    }
                },
                {
                    type: 'row',
                    content: [
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell2-1',
                                        style: {
                                            theme: 'common'
                                        }
                                    }],
                                    style: {
                                        theme: 'common'
                                    }
                                },
                            ],
                        },
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell2-2',
                                        style: {
                                            theme: 'common'
                                        }
                                    }]
                                }
                            ],
                            style: {
                                theme: 'common'
                            }
                        }
                    ],
                    style: {
                        theme: 'common'
                    }
                }
            ],
            style: {
                theme: 'common'
            }
        }
    ]
}
const content3 = {
    type: 'doc',
    content: [
        {
            type: 'paragraph',
            content: [{
                type: 'text',
                text: 'Hello, Word!',
                style: {
                    theme: 'custom',
                    css: 'color:skyblue;'
                }
            }]
        },
        {
            type: 'table',
            content: [
                {
                    type: 'row',
                    content: [
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-1',
                                        style: {
                                            theme: 'custom',
                                            css: 'color:#af3636;'
                                        }
                                    }]
                                },
                            ],
                            style: {
                                theme: 'custom',
                                css: 'border: 2px solid rgb(116 205 241);padding: 10px;'
                            }
                        },
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-2'
                                    }],
                                    style: {
                                        theme: 'custom',
                                        css: 'color: orange; font-weight:blob;'
                                    }
                                }
                            ],
                            style: {
                                theme: 'custom',
                                css: 'border: 2px solid rgb(116 205 241);padding: 10px;'
                            }
                        }
                    ]
                },
                {
                    type: 'row',
                    content: [
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-1',
                                    }]
                                },
                            ],
                            style: {
                                theme: 'custom',
                                css: 'border: 2px solid rgb(116 205 241);padding: 10px;'
                            }
                        },
                        {
                            type: 'cell',
                            content: [
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'cell1-2'
                                    }],
                                    style: {
                                        theme: 'custom',
                                        css: 'color: orange; font-weight:blob;'
                                    }
                                }
                            ],
                            style: {
                                theme: 'custom',
                                css: 'border: 2px solid rgb(116 205 241);padding: 10px;'
                            }
                        }
                    ]
                },
            ],
            style: {
                theme: 'custom',
                css: 'border: 2px solid pink;'
            }
        }
    ]
}
export { content1, content2, content3 }