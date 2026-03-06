import Parser from "rss-parser";

const parser = new Parser();

export async function getPosts() {
    try {
        const feed = await parser.parseURL(
            "https://medium.com/feed/@ahamadadhham"
        );

        return feed.items.slice(0, 6);
    } catch (error) {
        console.error("Medium RSS error:", error);
        return [];
    }
}