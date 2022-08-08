export interface Video {
    kind:          string;
    nextPageToken: string;
    regionCode:    string;
    items:         Item[];
}

export interface Item {
    kind:    string;
    id:      ID;
    snippet: Snippet;
}

export interface ID {
    kind:    string;
    videoId: string;
}

export interface Snippet {
    channelId:            string;
    channelTitle:         string;
    description:          string;
    liveBroadcastContent: string;
    publishTime:          Date;
    publishedAt:          Date;
    title:                string;
    thumbnails:           Thumbnails;
}

export interface Thumbnails {
    default: Default;
    high:    Default;
    medium:  Default;
}

export interface Default {
    height: number;
    url:    string;
    width:  number;
}
