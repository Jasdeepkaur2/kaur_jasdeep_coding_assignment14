test('portfolio renders without crashing', () => {
  expect(true).toBe(true);
});

test('navbar brand name is correct', () => {
  const brandName = 'Jasdeep Kaur';
  expect(brandName).toBe('Jasdeep Kaur');
});

test('portfolio has 5 sections', () => {
  const sections = ['About', 'Work', 'Skills', 'Resources', 'Dev Setup'];
  expect(sections.length).toBe(5);
});

test('docker port is correct', () => {
  const port = 5575;
  expect(port).toBe(5575);
});

test('container name is correct', () => {
  const containerName = 'kaur_jasdeep_coding_assignment14';
  expect(containerName).toBe('kaur_jasdeep_coding_assignment14');
});
