const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}

const startMadLib = () => {
    words.number = prompt("Give me a number")
    words.adjective = prompt("Give me a adjective")
    words.pluralNoun = prompt("Give me a plural noun")
    words.adverb = prompt("Give me a adverb")
    words.anotherAdjective = prompt("Give me another adjective ")
    console.log(words)
    alert(`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`)
}

startMadLib()
