import { AlertService } from './app/alert.service.js';
import { CalculatorService } from './app/calculator.service.js';
import { JokesService } from './app/jokes.service.js';

import { run } from './app/app.js';

import vendor from './vendor.js';
import css from './styles/style.scss';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);