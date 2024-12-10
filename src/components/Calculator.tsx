import React, { useState } from 'react';
import { Button } from './Button';
import { Display } from './Display';

export function Calculator() {
  const [display, setDisplay] = useState('');
  const [expression, setExpression] = useState('');
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (resetDisplay) {
      setDisplay(num);
      setResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setExpression(display + ' ' + op);
    setResetDisplay(true);
  };

  const handleEqual = () => {
    try {
      const result = eval(expression.split(' ').join('') + display);
      setDisplay(String(result));
      setExpression('');
    } catch (error) {
      setDisplay('Error');
    }
    setResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('');
    setExpression('');
  };

  return (
    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl w-[320px]">
      <Display value={display} expression={expression} />
      
      <div className="grid grid-cols-4 gap-3">
        <Button value="C" onClick={handleClear} variant="secondary" />
        <Button value="±" onClick={() => setDisplay(String(-parseFloat(display)))} variant="secondary" />
        <Button value="%" onClick={() => setDisplay(String(parseFloat(display) / 100))} variant="secondary" />
        <Button value="÷" onClick={() => handleOperator('/')} variant="operator" />

        <Button value="7" onClick={() => handleNumber('7')} />
        <Button value="8" onClick={() => handleNumber('8')} />
        <Button value="9" onClick={() => handleNumber('9')} />
        <Button value="×" onClick={() => handleOperator('*')} variant="operator" />

        <Button value="4" onClick={() => handleNumber('4')} />
        <Button value="5" onClick={() => handleNumber('5')} />
        <Button value="6" onClick={() => handleNumber('6')} />
        <Button value="-" onClick={() => handleOperator('-')} variant="operator" />

        <Button value="1" onClick={() => handleNumber('1')} />
        <Button value="2" onClick={() => handleNumber('2')} />
        <Button value="3" onClick={() => handleNumber('3')} />
        <Button value="+" onClick={() => handleOperator('+')} variant="operator" />

        <Button value="0" onClick={() => handleNumber('0')} />
        <Button value="." onClick={() => handleNumber('.')} />
        <Button value="⌫" onClick={() => setDisplay(display.slice(0, -1))} />
        <Button value="=" onClick={handleEqual} variant="operator" />
      </div>
    </div>
  );
}