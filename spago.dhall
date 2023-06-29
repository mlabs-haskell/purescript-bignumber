{ name = "bignumber"
, dependencies =
  [ "console"
  , "effect"
  , "either"
  , "exceptions"
  , "functions"
  , "integers"
  , "partial"
  , "prelude"
  , "tuples"
  , "uint"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
