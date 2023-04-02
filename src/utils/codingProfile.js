import fetch from 'node-fetch'
import { parse } from 'node-html-parser';

const fetchGet = async (url) => {
    const response = await fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    });
    // await response.json();
    return response
}

const fetchPost = async (url, body) => {
    const response = await fetch(url, {
        method: 'post',
        body,
        headers: { 'Content-Type': 'application/json' }
    });
    // await response.json();
    return response
}

const codeforcesProfile = async (username) => {
    let url = `https://codeforces.com/api/user.info?handles=${username}`
    let data = null
    try {
        data = await fetchGet(url)
        data = await data.json()

        data = data["result"][0]
        // console.log(data);
    } catch (e) {
        console.log(e);
        return null
    }
    return data

}
const leetcodeProfile = async (username) => {
    let url = `https://leetcode.com/graphql`
    let query = JSON.stringify({
        query: `{
            userContestRanking(username: "${username}"){
                rating,
                attendedContestsCount
            }
        }`
    });
    let data = null
    try {
        data = await fetchPost(url, query)
        data = await data.json()
        data = data["data"]
        // console.log(data);
    } catch (e) {
        console.log(e);
        return null
    }
    return data

}

const codechefProfile = async (username) => {
    let url = `https://www.codechef.com/users/${username}/`
    let data = null
    try {
        data = await fetch(url)
        data = await data.text()

        let root = parse(data)
        data = root.querySelector('.rating-number').innerText
        console.log(data);

        // data = data["result"][0]
        // console.log(data);
    } catch (e) {
        console.log(e);
        return null
    }
    return data
}
console.log(await codechefProfile("jhamadhav28"));