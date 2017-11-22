



router.get('/', (req, res) => {
  res.json({response: 'Looking at questions'});
});

router.post('/', (req,res) => {
  res.json({
    response: 'creating questions',
    body: req.body;
  });
});

router.get('/:qID', (req, res)=> {
  res.json({
    response: `looking at special answer id: ${req.params.qID}`
  });
});
