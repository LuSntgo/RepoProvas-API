import * as examRepository from '../repositories/examRepository.js'

export async function getDisciplines() {
    const disciplines = await examRepository.findAllByDiscipline()
    return disciplines
}

export async function getTests() {

    const allTests = await examRepository.getAllTests()
  
    return allTests
  
  }
  

export async function getAllTerms() {
    const terms = await examRepository.findDisciplineByTerms()
    return terms
}

export async function getAllCategories() {
    const category = await examRepository.findTestsByCategory()
    return category
}