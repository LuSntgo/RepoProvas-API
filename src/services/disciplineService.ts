import * as examRepository from '../repositories/examRepository.js'

export async function getDisciplines() {
    const disciplines = await examRepository.findAllByDiscipline()
    return disciplines
}