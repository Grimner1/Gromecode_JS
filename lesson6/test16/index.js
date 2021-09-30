function removeDuplicates(array) {

    if (!Array.isArray) {
        return null;
    };

    const newMass = [array[0]];

    for (let i of array) {
        let z = false;

        for (let y of newMass) {
            if (i === y) {
                z = true;
            };
        };

        if (z === false) {
            newMass.push(i);
        };
    };

    return newMass;
};