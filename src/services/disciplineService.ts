import * as examRepository from '../repositories/examRepository.js'

interface Filter {
    groupBy: "disciplines" | "teachers";
  }
  
  async function find(filter: Filter) {
    if (filter.groupBy === "disciplines") {
      return examRepository.getTestsByDisciplines();
    } else if (filter.groupBy === "teachers") {
      return examRepository.getTestsByTeachers();
    }
  }
  
  export default {
    find,
  };
  