function findMatching(driver, name) {
    return driver.filter(
        (mayMatch) => mayMatch.toLowerCase() === name.toLowerCase())
    }

function fuzzyMatch(driver, name) {
    return driver.filter(
        (mayMatch) => mayMatch.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
}

function matchName(driver, name) {
    return driver.filter((mayMatch) => mayMatch.name === name
    )
}