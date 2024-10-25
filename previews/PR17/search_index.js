var documenterSearchIndex = {"docs":
[{"location":"timemanager/#TimeManager","page":"TimeManager","title":"TimeManager","text":"","category":"section"},{"location":"timemanager/","page":"TimeManager","title":"TimeManager","text":"This module contains functions that handle dates and times in simulations. The functions in this module often call functions from Julia's Dates module.","category":"page"},{"location":"timemanager/#TimeManager-API","page":"TimeManager","title":"TimeManager API","text":"","category":"section"},{"location":"timemanager/","page":"TimeManager","title":"TimeManager","text":"ClimaUtilities.TimeManager.to_datetime\nClimaUtilities.TimeManager.strdate_to_datetime\nClimaUtilities.TimeManager.datetime_to_strdate\nClimaUtilities.TimeManager.trigger_callback\nClimaUtilities.TimeManager.Monthly\nClimaUtilities.TimeManager.EveryTimestep","category":"page"},{"location":"timemanager/#ClimaUtilities.TimeManager.to_datetime","page":"TimeManager","title":"ClimaUtilities.TimeManager.to_datetime","text":"to_datetime(date)\n\nConvert a DateTime-like object (e.g. DateTimeNoLeap) to a DateTime, using CFTime.jl. We need this since some data files we use contain DateTimeNoLeap objects for dates, which can't be used for math with DateTimes. The DateTimeNoLeap type uses the Gregorian calendar without leap years, while the DateTime type uses Gregorian calendar with leap years.\n\nFor consistency, all input data files should have dates converted to DateTime before being used in a simulation.\n\nArguments\n\ndate: DateTime-like object to be converted to DateTime\n\n\n\n\n\n","category":"function"},{"location":"timemanager/#ClimaUtilities.TimeManager.strdate_to_datetime","page":"TimeManager","title":"ClimaUtilities.TimeManager.strdate_to_datetime","text":"strdate_to_datetime(strdate::String)\n\nConvert from String (\"YYYYMMDD\") to Date format, required by the official AMIP input files.\n\n\n\n\n\n","category":"function"},{"location":"timemanager/#ClimaUtilities.TimeManager.datetime_to_strdate","page":"TimeManager","title":"ClimaUtilities.TimeManager.datetime_to_strdate","text":"datetime_to_strdate(datetime::Dates.DateTime)\n\nConvert from DateTime to String (\"YYYYMMDD\") format.\n\n\n\n\n\n","category":"function"},{"location":"timemanager/#ClimaUtilities.TimeManager.trigger_callback","page":"TimeManager","title":"ClimaUtilities.TimeManager.trigger_callback","text":"trigger_callback(date_nextcall::Dates.DateTime,\n    date_current::Dates.DateTime,\n    ::Monthly,\n    func::Function,)\n\nIf the current date is equal to or later than the \"next call\" date at time 00:00:00, call the callback function and increment the next call date by one month. Otherwise, do nothing and leave the next call date unchanged.\n\nThe tuple of arguments func_args must match the types, number, and order of arguments expected by func.\n\nArguments\n\ndate_nextcall::DateTime the next date to call the callback function at or after\ndate_current::DateTime the current date of the simulation\nsave_freq::AbstractFrequency frequency with which to trigger callback\nfunc::Function function to be triggered if date is at or past the next call date\nfunc_args::Tuple a tuple of arguments to be passed into the callback function\n\n\n\n\n\n","category":"function"},{"location":"#ClimaUtilities.jl","page":"ClimaUtilities.jl","title":"ClimaUtilities.jl","text":"","category":"section"}]
}
