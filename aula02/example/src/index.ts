// conjuntos fuzzy
// funcoes de pertinencia 
// Inferência

const luminositySet = new Map<string, number>();
luminositySet.set("baixa", 0);
luminositySet.set("normal", 0.3);
luminositySet.set("alta", 0.5);

const temperatureSet = new Map<string, number>();
temperatureSet.set("frio", 0);
temperatureSet.set("morna", 0.35);
temperatureSet.set("quente", 0.5);

const noiseSet = new Map<string, number>();
noiseSet.set("baixo", 0);
noiseSet.set("moderado", 0.25);
noiseSet.set("alto", 0.5);

function luminosityPertinence(luminosity: string): number {
    return luminositySet.get(luminosity) || 0;
}

function temperaturePertinence(temperature: string): number {
    return temperatureSet.get(temperature) || 0;
}

function noisePertinence(noise: string): number {
    return noiseSet.get(noise) || 0;
}

type fuzzyPropsType = {
    luminosityLevel: string,
    temperatureLevel: string,
    noiseLevel: string
}

type fuzzyOutputDto = {
    am: string,
    pm: string
}

function fuzzyInference({ 
    luminosityLevel, 
    temperatureLevel, 
    noiseLevel }: 
    fuzzyPropsType): fuzzyOutputDto {
    const luminosityPertinenceValue = luminosityPertinence(luminosityLevel);
    const temperaturePertinenceValue = temperaturePertinence(temperatureLevel);
    const noisePertinenceValue = noisePertinence(noiseLevel);

    const inferenceLevel = (luminosityPertinenceValue 
        + temperaturePertinenceValue 
        + noisePertinenceValue) / 3;

    console.log("inferenceLevel: ", inferenceLevel);

    if(inferenceLevel >= 0 && inferenceLevel < 0.16) {
        return {
            am: "madrugada",
            pm: "noite"
        }
    }
    else if (inferenceLevel >= 0.16 && inferenceLevel < 0.35) {
        return {
            am: "manhã",
            pm: "tardezinha"
        }
    }
    else {
        return {
            am: "meio-dia",
            pm: "tarde"
        }
    }
}

type Answers = {
    luminosityLevel: "baixo" | "normal" | "alto",
    temperatureLevel: "frio" | "morna" | "quente",
    noiseLevel: "baixo" | "moderado" | "alto" 
}

const answers: Answers = {
    luminosityLevel: "baixo",
    temperatureLevel: "quente",
    noiseLevel: "alto"
}

const inference = fuzzyInference(answers);

console.log(inference);