function validUserNames(usernames) {
    return usernames.filter(username => username.length < 10);
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));